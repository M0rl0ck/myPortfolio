import style from "./education.module.css";

function Education() {
  return (
    <section className={style.education}>
      <h2>Education:</h2>
      <p>South-Russian State University of Economics and Service</p>
      <p>
        RS Schools JavaScript Course{" "}
        <a href="https://rs.school/js/">«JavaScript/Front-end»</a>
        {" => "}
        <a href="https://app.rs.school/certificate/aqzqabf7">Certificate</a>
      </p>
      <p>
        RS Schools React Course{" "}
        <a href="https://rs.school/react/">«React Course»</a>
        {" => "}
        <a href="https://app.rs.school/certificate/rugf7yq4">Certificate</a>
      </p>
    </section>
  );
}

export default Education;
