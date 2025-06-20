import React, { useState, useEffect } from 'react';
import './CircularProgress.css';

/**
 * 원형 진행률 표시기를 렌더링하는 React 컴포넌트입니다. 지정된 기간 동안 진행률이 부드럽게 증가합니다.
 * @component
 * @param {Object} props - CircularProgressExample 컴포넌트의 속성(props)입니다.
 * @param {number} props.percentage - 목표 진행률 백분율 값 (0~100).
 * @param {number} [props.size=100] - 원형 진행률 표시기의 크기(너비와 높이, 단위: 픽셀).
 * @param {number} [props.strokeWidth=10] - 진행 원의 선 두께(단위: 픽셀).
 * @param {number} [props.duration=1000] - 진행률이 0에서 목표 값까지 증가하는 시간(밀리초).
 * @param {number} [props.updateRate=50] - 진행률 업데이트 빈도(밀리초).
 * @returns {JSX.Element} 렌더링된 원형 진행률 컴포넌트.
 */
const CircularProgressExample = ({
	percentage,
	size = 100,
	strokeWidth = 10,
	duration = 1000,
	updateRate = 50,
}) => {
	/**
	 * 현재 표시되는 진행률 상태.
	 * @type {number}
	 */
	const [currentPercentage, setCurrentPercentage] = useState(0);

	/**
	 * 원의 반지름. 크기와 선 두께를 기반으로 계산됩니다.
	 * @type {number}
	 */
	const radius = (size - strokeWidth) / 2;

	/**
	 * 원의 둘레. 선 대시 계산에 사용됩니다.
	 * @type {number}
	 */
	const circumference = 2 * Math.PI * radius;

	/**
	 * 진행 원의 선 대시 오프셋. 현재 진행률에 따라 계산됩니다.
	 * @type {number}
	 */
	const strokeDashoffset =
		circumference - (currentPercentage / 100) * circumference;

	/**
	 * 컴포넌트 마운트 시 진행률을 0에서 목표 값까지 부드럽게 증가시키는 애니메이션을 설정합니다.
	 */
	useEffect(() => {
		const increment = percentage / (duration / updateRate); // 각 업데이트마다 증가할 값
		let current = 0;

		const interval = setInterval(() => {
			current += increment;
			if (current >= percentage) {
				current = percentage;
				clearInterval(interval);
			}
			setCurrentPercentage(Math.round(current));
		}, updateRate);

		return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
	}, [percentage, duration, updateRate]);

	return (
		<div className="progress-container">
			<svg width={size} height={size} className="progress-circle">
				{/**
				 * 진행률 표시기의 배경 원입니다.
				 */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={strokeWidth}
					stroke="#e0e0e0"
					fill="transparent"
				/>
				{/**
				 * 진행률을 나타내는 전경 원입니다.
				 */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke="#3b82f6"
					strokeWidth={strokeWidth}
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
				/>
			</svg>
			{/**
			 * 현재 진행률 백분율 값을 표시하는 텍스트입니다.
			 */}
			<div className="progress-text">{currentPercentage}%</div>
		</div>
	);
};

export default CircularProgressExample;
