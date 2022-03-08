import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from '../components/UI/footer/Footer';
import { Header } from '../components/UI/header/Header';
import { HomePage } from '../components/UI/HomePage';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<> 404 Page no found</>} />
                </Routes>
            </div>

            <Footer />

        </BrowserRouter>
    );
}