import axios from 'axios'

// import PutTinyActivity from '../../components/Form/PutTinyActivity'

const ActivityFormPut = () => {
  const submitPoleData = async event => {
    event.preventDefault()
    const results = await axios.put(
      `${process.env.REACT_APP_URL_API}/activity/${id}`
    )
    console.log('results :', results)
  }

  return <></>
}

export default ActivityFormPut
