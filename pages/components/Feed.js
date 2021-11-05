import React from 'react';
import Stories from './Stories';

export default function Feed() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto'>
			<main>
				<section className='col-span-2'>
					<Stories />
				</section>

				<section></section>
			</main>
		</div>
	);
}
