import React from 'react';
import works from '../data/works';
import ServicesTitle from './ServicesTitle';
import WorksItem from './WorksItem';

function WorksProjects() {
	return (
		<div className="py-12">
			<ServicesTitle id="works">Recent Works</ServicesTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{works.map(work => (
					<WorksItem
						key={work.title}
						imgUrl={work.imgUrl}
						title={work.title}
						tech={work.tech}
						workUrl={work.workUrl}
					/>
				))}
			</div>
		</div>
	);
}

export default WorksProjects;