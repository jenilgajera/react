const AllfacDesign = () => {
    var faculties = [
      {
        FacultyId: 1,
        FacultyName: "Nirav Bhat",
        FacultyDesignation: "Dean - School of Engineering",
        FacultyEducationQuilification: "PhD",
        FacultyExperience: "10 years",
        FacultyImage:
          "https://www.rku.ac.in/rkupanel/images/faculty-achievement/050822074428nirav.jpg",
      },
      {
        FacultyId: 2,
        FacultyName: "Chetan",
        FacultyDesignation: "HOD - School of Engineering",
        FacultyEducationQuilification: "PhD",
        FacultyExperience: "8 years",
        FacultyImage:
          "https://www.rku.ac.in/rkupanel/images/faculty-achievement/050822074428nirav.jpg",
      },
      {
        FacultyId: 3,
        FacultyName: "Snehal Sathwara",
        FacultyDesignation: "HOD - School of Engineering",
        FacultyEducationQuilification: "PhD",
        FacultyExperience: "11 years",
        FacultyImage:
          "https://www.rku.ac.in/rkupanel/images/faculty-achievement/050822074428nirav.jpg",
      },
      {
        FacultyId: 4,
        FacultyName: "Jai Sir",
        FacultyDesignation: "Professor - School of Engineering",
        FacultyEducationQuilification: "PhD",
        FacultyExperience: "8 years",
        FacultyImage:
          "https://www.rku.ac.in/rkupanel/images/faculty-achievement/050822074428nirav.jpg",
      },
    ];
  
    const FormatedFac = faculties.map((fac) => {
      return (
        <div className="card" style={{ width: '18rem', margin: '1rem' }} key={fac.FacultyId}>
          <img src={fac.FacultyImage} className="card-img-top" alt={fac.FacultyName} />
          <div className="card-body">
            <h5 className="card-title">{fac.FacultyName}</h5>
            <p className="card-text">
              {fac.FacultyDesignation}
            </p>
            <a href="#" className="btn btn-primary">
              {fac.FacultyExperience}
            </a>
          </div>
        </div>
      );
    });
  
    return <div className="d-flex flex-wrap">{FormatedFac}</div>;
  };
  
  export default AllfacDesign;
  