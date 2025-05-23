import './Questions.css'
import Navbar from '../../components/Navbar/Navbar'
import FrameContainer from '../../components/FrameContainer/FrameContainer'
import Footer from '../../components/Footer/Footer'

import { Accordion } from 'react-bootstrap'

export default function Questions() {
    return (
        <>
            <Navbar />

            <main className='main my-5'>
                <div className='container-md'>
                    <FrameContainer title='پرسش های متداول' icon='fa-solid fa-light fa-block-question'>
                        <div className='py-4 px-3'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='ir-bold'>با موبایل و تبلت هم می تونیم توی آزمون ها شرکت کنیم؟ با آیفون هم سازگار هست؟</Accordion.Header>
                                    <Accordion.Body className='ir-light text-black'>بله در تمامی گوشی ها و تبلت های اندروید و ios قابلیت آزمون دادن دارید.</Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className='ir-bold'>خدمات پشتیبانی هم دارید؟ چه مدت؟</Accordion.Header>
                                    <Accordion.Body className='ir-light text-black'>بله پشتیبانی 6 ماهه بر روی تمامی خدمات ما وجود داره و از این جهت جای نگرانی وجود نداره.</Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className='ir-bold'>آیا امکان پرداخت آنلاین وجود دارد یا فقط حضوری؟</Accordion.Header>
                                    <Accordion.Body className='ir-light text-black'>بله سامانه ما از پرداخت آنلاین تحت بستر زرین پال پشتیبانی می کند، که می توانید توسط تمامی کارت های عضو شبکه شتاب خرید آنلاین خود را کامل کنید.</Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header className='ir-bold'>پاسخ نامه های تشریحی کامل هستند؟</Accordion.Header>
                                    <Accordion.Body className='ir-light text-black'>بله از این بابت نگران نباشید. پاسخ نامه های مجموعه ما، به صورت تشریحی و جامع هستند.</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </FrameContainer>
                </div>
            </main>
            
            <Footer />
        </>
    )
}