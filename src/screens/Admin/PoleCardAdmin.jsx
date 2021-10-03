const PoleCardAdmin = ({ id, pole_name, pole_miniature_img, deleteCard }) => {
  return (
    <>
      <figure>
        <img src={pole_miniature_img} alt={pole_name} />
        <figcaption>
          <p>{pole_name}</p>
        </figcaption>
      </figure>
      <button onClick={() => deleteCard(id)}>Supprimer</button>
    </>
  )
}
export default PoleCardAdmin
