import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap'

import './App.scss'
import { fetchData } from './redux/actions/data';

import InputSearch from './Component/InputSearch/InputSearch'
import Card from './Component/Card/Card';
import Loading from './Component/Loading/Loading';

const App = () => {
	const dispatch = useDispatch()
	const cards = useSelector(state => state.data.cards)
	const isLoading = useSelector(state => state.data.isLoading)
	const [search, setSearch] = useState('')
	const searchLower = search.toLowerCase()
	
	
	useEffect(() => {
		dispatch(fetchData())
	}, [dispatch])

	const onSearch = (value) => {
		setSearch(value)
	}

	const getCardsFiltered = cards.filter(item =>
			item.author.toLowerCase().includes(searchLower))

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className='wrapper'>
			<Container fluid="md">
				<Row>
					<Col sm={12} lg={{ span: 4, offset: 4 }}>
						<InputSearch onSearch={onSearch} search={search} />
					</Col>
				</Row>
				<Row className='cards-block'>
					{
						getCardsFiltered.length 
							? getCardsFiltered.map((item, i) => (
								<Col sm={6} lg={4}
									key={`${item.title}_${i}`}>
									<Card item={item} />
								</Col>
							))
							: <div>Не найдено ни одной карточки...</div>
					}
				</Row>
			</Container>
		</div>
	)
}

export default App
