import english from "../Assets/english.png";
import maths from "../Assets/maths.png";
import chemistry from "../Assets/chemistry.png";
import physics from "../Assets/physics.png";
import biology from "../Assets/biology.png";
const course = [
  {
    id: 1,
    name: "chemistry",
    img: chemistry,
    details: {
      intro:
        "Chemistry is a physical science, and it is the study of the properties of and interactions between matter and energy. In other words, chemistry is a way to study the properties, characteristics, and physical and chemical changes of matter.",
      branches: ["Biochemistry", "Analytical chemistry", "Physical Chemistry"],
    },
  },
  {
    id: 2,
    name: "Physics",
    img: physics,
    details: {
      intro:
        "Physics is a science. Science works according to the scientific method. The scientific method accepts only reason, logic, and experimental evidence to tell between what is scientifically correct and what is not. Scientists do not simply believe – they test, and keep testing until satisfied. Just because some “big scientist” says something is right, that thing does not become a fact of science.",
      branches: [
        "Classical Physics.",
        "Modern Physics.",
        "Nuclear Physics.",
        "Atomic Physics.",
        "Geophysics.",
        "Biophysics.",
        "Mechanics.",
        "Acoustics.",
      ],
    },
  },
  {
    id: 3,
    name: "Mathematics",
    img: maths,
    details: {
      intro:
        "Mathematics is  not  only  concerned with everyday problems, but  also  with  using  imagination,  intuition  and  reasoning  to find new ideas  and  to  solve puzzling problems.",
      branches: [
        "Algebra.",
        "Geometry.",
        "Trigonometry.",
        "Calculus.",
        "Statistics and Probability.",
      ],
    },
  },
  {
    id: 4,
    name: "Biology",
    img: biology,
    details: {
      intro:
        "The word biology means, the science of life, from the Greek bios, life, and logos, word or knowledge. Therefore, Biology is the science of Living Things. That is why Biology is sometimes known as Life Science.",
      branches: [
        "Anatomy.",
        "Botany.",
        "Taxonomy.",
        "Zoology.",
        "Microbiology.",
        "Mycology.",
        "Phycology.",
        "Parasitology.",
      ],
    },
  },
  {
    id: 5,
    name: "English Language",
    img: english,
    details: {
      intro:
        "English studies (usually called simply English) is an academic discipline taught in primary, secondary, and post-secondary education in English-speaking countries; it is not to be confused with English taught as a foreign language, which is a distinct discipline. It involves the study and exploration of texts created in English literature.",
      branches: [
        "English linguistics.",
        "English sociolinguistics.",
        "Discourse analysis in English.",
        "English Stylistics (linguistics)",
        "World Englishes.",
        "History of the English language.",
        "Composition studies.",
        "Rhetoric.",
      ],
    },
  },
];
const getCourse = (id) => {
  let newCourse = course.find((item) => item.id === id);
  return newCourse;
};
const statusText = {
  created1: "Account created successfuly",
  created2: "Please Login Now",
  nodetails1: "Please Fill all Fields Correctly",
  logoutWaiting1: "Please Wait A Moment",
  logoutSuccess1: "Log Out Successful",
};
const isUser = async (email, getUser, dispatch) => {
  try {
    const snapshot = await getUser(email);
    const users = snapshot.docs;
    console.log(users);
    if (users.length > 0) {
      const userData = {
        ...users[0].data(),
        id: users[0].id,
      };
      dispatch({ type: "USER_EXIST", payload: userData });
    } else {
      dispatch({ type: "USER_UNDEFINED" });
    }
    return { success: true };
  } catch (error) {
    console.log(error.message);
    return { success: false };
  }
};
export { course, getCourse, statusText, isUser };
