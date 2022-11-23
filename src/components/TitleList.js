function TitleList({ title, list = [] }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {list.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default TitleList;
