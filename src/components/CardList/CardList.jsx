export const CardList = ({ data }) => {
    return (
      <ul>
        {data.map(({ id, name, age, city, email, isStudent, createdAt }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
            <p>Created: {createdAt}</p>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        ))}
      </ul>
    );
  };