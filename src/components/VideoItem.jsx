import React from "react";
import './VideoItem.css'

const VideoItems = ({ video, onVideoSelect }) => {
	return (
		<div onClick={ () => onVideoSelect(video) } className="item video-item">
			<img
				className="ui image"
                alt={video.snippet.title}
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className="content">
				<h3 className="header">{video.snippet.title}</h3>
                <div className="description">{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoItems;
