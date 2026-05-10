'use client'
import { useEffect, useRef } from 'react'

function makeBolt(w, h) {
  const x = w * (0.05 + Math.random() * 0.9)
  const yEnd = h * (0.25 + Math.random() * 0.6)
  const steps = 8 + Math.floor(Math.random() * 8)
  const dy = yEnd / steps
  const pts = [[x, 0]]
  const branches = []
  let cx = x
  for (let i = 0; i < steps; i++) {
    cx += (Math.random() - 0.5) * 55
    pts.push([cx, dy * (i + 1)])
    if (i > 2 && Math.random() < 0.28) {
      const bl = 2 + Math.floor(Math.random() * 3)
      let bx = cx, by = dy * (i + 1)
      const bp = [[bx, by]]
      for (let j = 0; j < bl; j++) {
        bx += (Math.random() > 0.5 ? 1 : -1) * (20 + Math.random() * 35)
        by += dy * 0.8
        bp.push([bx, by])
      }
      branches.push(bp)
    }
  }
  return { pts, branches, alpha: 1, phase: 'flicker', tick: 0 }
}

function drawPts(ctx, pts, a, lw, blur) {
  if (pts.length < 2) return
  ctx.save()
  ctx.globalAlpha = a
  ctx.strokeStyle = '#F5E03A'
  ctx.lineWidth = lw
  ctx.shadowColor = '#F5E03A'
  ctx.shadowBlur = blur
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  ctx.moveTo(pts[0][0], pts[0][1])
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
  ctx.stroke()
  ctx.restore()
}

export default function LightningCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    let running = true
    let raf
    const strikes = []

    function resize() {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(parent)

    function schedule() {
      if (!running) return
      setTimeout(() => {
        if (!running) return
        strikes.push(makeBolt(canvas.width, canvas.height))
        if (Math.random() > 0.5) {
          setTimeout(() => {
            if (running) strikes.push(makeBolt(canvas.width, canvas.height))
          }, 80 + Math.random() * 120)
        }
        schedule()
      }, 600 + Math.random() * 2500)
    }
    schedule()

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = strikes.length - 1; i >= 0; i--) {
        const s = strikes[i]
        drawPts(ctx, s.pts, s.alpha * 0.22, 10, 35)
        drawPts(ctx, s.pts, s.alpha, 1.5, 12)
        for (const b of s.branches) drawPts(ctx, b, s.alpha * 0.65, 1, 8)
        if (s.tick === 0) {
          ctx.save()
          ctx.globalAlpha = 0.09
          ctx.fillStyle = '#F5E03A'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.restore()
        }
        s.tick++
        if (s.phase === 'flicker' && s.tick < 5) {
          s.alpha = s.tick % 2 === 0 ? 0.2 : 1
        } else {
          s.phase = 'fade'
          s.alpha -= 0.05
        }
        if (s.alpha <= 0) strikes.splice(i, 1)
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    function handleVisibility() {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
        strikes.length = 0
      } else {
        running = true
        schedule()
        draw()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
