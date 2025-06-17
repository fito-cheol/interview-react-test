import React from 'react';
import './CircularProgress.css';

/**
 * 원형 진행률 표시기를 렌더링하는 React 컴포넌트입니다.
 * @component
 * @param {Object} props - CircularProgress 컴포넌트의 속성(props)입니다.
 * @param {number} props.percentage - 표시할 진행률 백분율 값 (0~100).
 * @param {number} [props.size=100] - 원형 진행률 표시기의 크기(너비와 높이, 단위: 픽셀).
 * @param {number} [props.strokeWidth=10] - 진행 원의 선 두께(단위: 픽셀).
 * @returns {JSX.Element} 렌더링된 원형 진행률 컴포넌트.
 */
const CircularProgress = ({ percentage, size = 100, strokeWidth = 10 }) => {
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
	 * 진행 원의 선 대시 오프셋. 백분율에 따라 계산됩니다.
	 * @type {number}
	 */
	const strokeDashoffset = circumference - (percentage / 100) * circumference;

	return (
		<div className="progress-container">
			<svg width={size} height={size} className="progress-circle">
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={strokeWidth}
					stroke="#e0e0e0"
					fill="transparent"
				/>
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
			<div className="progress-text">{percentage}%</div>
		</div>
	);
};

export default CircularProgress;
