import './Loading.css'

const Loading = (props) => {
	return (
        <div className={`lds-ring ${props.classes}`}>
			<div>
				</div><div></div>
				<div></div><div>
			</div>
		</div>
	)
}

export default Loading
