import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Fume">
      <img src="./images/fume_white.svg" className='w-32' alt="Fume" />
    </Link>
  )
}
