function MovieMoreInfo({ plot, actors, director }) {
  return (
    <div className="flex flex-col gap-8">
      {plot && plot !== "N/A" && (
        <p>
          <em> {plot} </em>
        </p>
      )}
      {actors && actors !== "N/A" && <p>Starring {actors} </p>}
      {director && director !== "N/A" && <p>Directed by {director} </p>}
    </div>
  );
}

export default MovieMoreInfo;
