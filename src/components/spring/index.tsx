import { useSpring, animated } from '@react-spring/web'

export default function Spring() {
  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 400 },
  })

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    />
  )
}