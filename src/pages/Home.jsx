import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FetchNewsRequest } from "reduxs/actions"
import TitleComponent from 'components/TitleComponent'
import Navbar from 'components/organism/Navbar'

const Home = ({ fetchAllNews, newsList }) => {
	useEffect(() => {
		fetchAllNews()
	}, [])
	return (
		<React.Fragment>
			<Navbar />
			<div className="flex flex-col justify-center items-center">
				<h1 className="font-bold text-indigo-800 text-3xl mt-10">News List</h1>
				{
					newsList.loading ? (<h1 className='mt-4'>Fetching Newsletter...</h1>) :
						newsList.error ? (<h3 className='text-red-600 font-medium text-sm'>{newsList.error}</h3>) :
							(
								<div>
									{
										newsList &&
										newsList.news &&
										newsList.news.map((items) => (
											<div key={items.id}>
												<TitleComponent>{items.title}</TitleComponent>
											</div>
										))
									}
								</div>
							)
				}
			</div>
		</React.Fragment>
	)
}

const mapStateToProps = (state) => {
	return {
		newsList: state.newsReducers
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllNews: () => dispatch(FetchNewsRequest())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)