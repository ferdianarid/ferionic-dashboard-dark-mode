import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FetchNewsRequest } from "reduxs/actions"

const TitleComponent = ({ children }) => {
    return (
        <h1 className="font-bold text-2xl text-indigo-600">{children}</h1>
    )
}

const Home = ({ fetchAllNews, newsList }) => {
    useEffect(() => {
        fetchAllNews()
    }, [])
    return (
        <React.Fragment>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-indigo-800 text-3xl mt-10">Users List</h1>
                {
                    newsList.loading ? (<h1>Fetching Newsletter...</h1>) :
                        newsList.error ? (<h3 className='text-red-600 font-medium text-sm'>{newsList.error}</h3>) :
                            (
                                <div>
                                    {
                                        newsList &&
                                        newsList.news &&
                                        newsList.news.map((items) => (
                                            <div key={items.id}>
                                                <li>{items.title}</li>
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