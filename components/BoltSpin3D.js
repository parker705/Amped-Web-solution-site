'use client'
import { useEffect, useRef } from 'react'

// Bolt polygon centered at origin
// Source: points="36,0 12,42 28,42 20,80 50,30 32,30", CX=31, CY=40
const BOLT = [[5,-40],[-19,2],[-3,2],[-11,40],[19,-10],[1,-10]]
const DEPTH = 14

export default function BoltSpin3D({ size = 320 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = size + 'px'
    canvas.style.height = size + 'px'
    ctx.scale(dpr, dpr)

    const SCALE = size / 90
    const FOV = 480
    let angle = 0
    let raf

    function project([x, y, z]) {
      const d = FOV / (FOV + z * SCALE)
      return [x * SCALE * d, y * SCALE * d]
    }

    function rotY([x, y, z], a) {
      return [
        x * Math.cos(a) - z * Math.sin(a),
        y,
        x * Math.sin(a) + z * Math.cos(a),
      ]
    }

    function poly(pts) {
      ctx.beginPath()
      ctx.moveTo(pts[0][0], pts[0][1])
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
      ctx.closePath()
    }

    function frame() {
      ctx.clearRect(0, 0, size, size)
      ctx.save()
      ctx.translate(size / 2, size / 2)

      const front3d = BOLT.map(p => rotY([p[0], p[1], DEPTH / 2], angle))
      const back3d  = BOLT.map(p => rotY([p[0], p[1], -DEPTH / 2], angle))

      const frontFacing = front3d[0][2] > back3d[0][2]

      const frontP = front3d.map(project)
      const backP  = back3d.map(project)

      // Draw side faces
      const n = BOLT.length
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n
        const edgeX = BOLT[j][0] - BOLT[i][0]
        const edgeY = BOLT[j][1] - BOLT[i][1]
        const len = Math.sqrt(edgeX * edgeX + edgeY * edgeY) || 1
        const nx = edgeY / len
        const shade = 0.3 + 0.35 * Math.abs(Math.cos(angle + Math.atan2(nx, 0.5)))

        ctx.beginPath()
        ctx.moveTo(frontP[i][0], frontP[i][1])
        ctx.lineTo(frontP[j][0], frontP[j][1])
        ctx.lineTo(backP[j][0], backP[j][1])
        ctx.lineTo(backP[i][0], backP[i][1])
        ctx.closePath()
        ctx.fillStyle = `rgba(160, 118, 6, ${shade})`
        ctx.fill()
      }

      // Far face (dark)
      poly(frontFacing ? backP : frontP)
      ctx.fillStyle = '#6a4f00'
      ctx.fill()

      // Near face — bright yellow with multi-pass glow
      const nearP = frontFacing ? frontP : backP

      ctx.shadowColor = '#F5E03A'
      ctx.shadowBlur = 70
      poly(nearP)
      ctx.fillStyle = '#F5E03A'
      ctx.fill()

      ctx.shadowBlur = 120
      ctx.globalAlpha = 0.25
      poly(nearP)
      ctx.fillStyle = '#fffce0'
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      ctx.restore()

      angle += 0.007
      raf = requestAnimationFrame(frame)
    }

    frame()
    return () => cancelAnimationFrame(raf)
  }, [size])

  return <canvas ref={ref} />
}
