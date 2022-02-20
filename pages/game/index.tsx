import Heading from '@/components/Head'
import Link from 'next/link'

export default function Index() {
	const title = "Main Menu"
	return <>
		<Heading title={title} />
		<div className='fullscreen'>
			<div className="card">
				<h1>{title}</h1>
				<br />
				<Link href={`/game/${0}`}><button className='button button--blue'>Join Game</button></Link>
				<br />
				<Link href={`/game/${0}`}><button className='button button--blue'>Create Game</button></Link>
			</div>
		</div>
	</>
}
