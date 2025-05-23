import "./Exams.css";
import Navbar from "../../components/Navbar/Navbar";
import FrameContainer from "../../components/FrameContainer/FrameContainer";
import TestCard from "../../components/TestCard/TestCard";
import Footer from "../../components/Footer/Footer";

export default function Exams() {
  return (
    <>
      <Navbar />

      <main className="main my-5">
        <div className="container-md">
          <FrameContainer
            title="فهرست آزمون ها"
            icon="fa-sharp fa-solid fa-newspaper"
          >
            <div
              className="d-flex flex-wrap my-4"
              style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
            >
              <TestCard name="آزمون سینماتیک" />
              <TestCard name="آزمون دینامیک" />
              <TestCard name="آزمون موج" />
              <TestCard name="آزمون جامع دهم" />
              <TestCard name="آزمون گرما و مغناطیس" />
              <TestCard name="آزمون جامع فیزیک" />
            </div>
          </FrameContainer>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
