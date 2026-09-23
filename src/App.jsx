import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

// Importaciones de Apprentice
import ApprenticeIndex from './pages/Apprentice/index';
import ApprenticeCreate from './pages/Apprentice/Create';
import ApprenticeEdit from './pages/Apprentice/Edit';
import ApprenticeShow from './pages/Apprentice/Show';

// Importaciones de Area
import AreaIndex from './pages/Area/index';
import AreaCreate from './pages/Area/Create';
import AreaEdit from './pages/Area/Edit';
import AreaShow from './pages/Area/Show';

// Importaciones de Computer
import ComputerIndex from './pages/Computer/index';
import ComputerCreate from './pages/Computer/Create';
import ComputerEdit from './pages/Computer/Edit';
import ComputerShow from './pages/Computer/Show';

// Importaciones de Course
import CourseIndex from './pages/Course/index';
import CourseCreate from './pages/Course/Create';
import CourseEdit from './pages/Course/Edit';
import CourseShow from './pages/Course/Show';

// Importaciones de Teacher
import TeacherIndex from './pages/Teacher/index';
import TeacherCreate from './pages/Teacher/Create';
import TeacherEdit from './pages/Teacher/Edit';
import TeacherShow from './pages/Teacher/Show';

// Importaciones de TrainingCenter
import TrainingCenterIndex from './pages/TrainingCenter/index';
import TrainingCenterCreate from './pages/TrainingCenter/Create';
import TrainingCenterEdit from './pages/TrainingCenter/Edit';
import TrainingCenterShow from './pages/TrainingCenter/Show';

export default function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column bg-light">
        {/* Barra de navegación superior */}
        <Navbar />

        {/* Contenido principal */}
        <div className="flex-grow-1">
          <main className="container-fluid px-0">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Módulo Apprentice (Aprendices) */}
              <Route path="/apprentice" element={<ApprenticeIndex />} />
              <Route path="/apprentice/create" element={<ApprenticeCreate />} />
              <Route path="/apprentice/edit/:id" element={<ApprenticeEdit />} />
              <Route path="/apprentice/show/:id" element={<ApprenticeShow />} />

              {/* Módulo Area (Áreas) */}
              <Route path="/area" element={<AreaIndex />} />
              <Route path="/area/create" element={<AreaCreate />} />
              <Route path="/area/edit/:id" element={<AreaEdit />} />
              <Route path="/area/show/:id" element={<AreaShow />} />

              {/* Módulo Computer (Computadores) */}
              <Route path="/computer" element={<ComputerIndex />} />
              <Route path="/computer/create" element={<ComputerCreate />} />
              <Route path="/computer/edit/:id" element={<ComputerEdit />} />
              <Route path="/computer/show/:id" element={<ComputerShow />} />

              {/* Módulo Course (Cursos) */}
              <Route path="/course" element={<CourseIndex />} />
              <Route path="/course/create" element={<CourseCreate />} />
              <Route path="/course/edit/:id" element={<CourseEdit />} />
              <Route path="/course/show/:id" element={<CourseShow />} />

              {/* Módulo Teacher (Instructores) */}
              <Route path="/teacher" element={<TeacherIndex />} />
              <Route path="/teacher/create" element={<TeacherCreate />} />
              <Route path="/teacher/edit/:id" element={<TeacherEdit />} />
              <Route path="/teacher/show/:id" element={<TeacherShow />} />

              {/* Módulo TrainingCenter (Centros de Formación) */}
              <Route path="/training-center" element={<TrainingCenterIndex />} />
              <Route path="/training-center/create" element={<TrainingCenterCreate />} />
              <Route path="/training-center/edit/:id" element={<TrainingCenterEdit />} />
              <Route path="/training-center/show/:id" element={<TrainingCenterShow />} />
            </Routes>
          </main>
        </div>

        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  );
}