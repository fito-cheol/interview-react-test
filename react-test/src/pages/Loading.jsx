import React, { useState } from 'react';
import CircularProgress from '../components/CircularProgress';
import CircularProgressExample from '../components/CircularProgressExample';

const Loading = () => {
	const [show, setShow] = useState(true);

	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<button
					onClick={() => {
						setShow(false);
						setTimeout(() => {
							setShow(true);
						}, 0);
					}}
				>
					초기화
				</button>
				{show && (
					<>
						<CircularProgress percentage={80} />
						<CircularProgressExample percentage={80} duration={2000} />
					</>
				)}
			</div>
		</>
	);
};

export default Loading;
