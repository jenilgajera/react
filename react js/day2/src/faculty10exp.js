const Faculty10exp = ()=>{
    var faculties=[
        {
            FacultyId:1,
            FacultyName:'nirav bhat',
            FacultyDesignation:'dean-school of engineering',
            FacultyEducationQuilification:'phd',
            FacultyExperience:'10years',
            FacultyImage:'https://www.rku.ac.in/rkupanel/images/faculty-achievement/050822074428nirav.jpg'
        },
        {
            FacultyId:2,
            FacultyName:'chetan',
            FacultyDesignation:'Hod-school of engineering',
            FacultyEducationQuilification:'phd',
            FacultyExperience:'8years',
            FacultyImage:'https://www.rku.ac.in/rkupanel/images/faculty-achievement/050822074428nirav.jpg'
        },
        {
            FacultyId:3,
            FacultyName:'snehal sathwara',
            FacultyDesignation:'Hod-school of engineering',
            FacultyEducationQuilification:'phd',
            FacultyExperience:'11years',
            FacultyImage:'https://www.rku.ac.in/rkupanel/images/faculty-achievement/050822074428nirav.jpg'
        },
        {
            FacultyId:4,
            FacultyName:'jai sir',
            FacultyDesignation:'professor-school of engineering',
            FacultyEducationQuilification:'phd',
            FacultyExperience:'8years',
            FacultyImage:'https://www.rku.ac.in/rkupanel/images/faculty-achievement/050822074428nirav.jpg'
        },
    ];
    const FiltedFac =faculties.filter((fac)=>{
        const ExpInNumber=parseInt(fac.FacultyExperience.split('+')[0]);
        return ExpInNumber>9;
    });   


    const FormatedFac =FiltedFac.map((fac)=>{
        return <h5 class="bg-primary"> {fac.FacultyName} </h5>;
    });
    
    return FormatedFac;
};

export default Faculty10exp;