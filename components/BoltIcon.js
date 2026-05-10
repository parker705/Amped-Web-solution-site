export default function BoltIcon({ size = 40, color = '#F5E03A', className = '' }) {
  const w = size
  const h = Math.round(size * 1.333)
  return (
    <svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      className={className}
    >
      <polygon points="36,0 12,42 28,42 20,80 50,30 32,30" fill={color} />
    </svg>
  )
}
