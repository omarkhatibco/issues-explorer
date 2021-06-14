import Link from 'next/link';
import { Container, Heading, Main } from './';

export const Layout: React.FC = ({ children }) => {
	return (
		<Main>
			<Container>
				<Link href='/'>
					<Heading>React Issues Explorer</Heading>
				</Link>
				{children}
			</Container>
		</Main>
	);
};
