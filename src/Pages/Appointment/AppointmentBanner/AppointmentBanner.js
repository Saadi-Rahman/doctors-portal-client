import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <div className='lg:mx-20'>
            <header>
                <div className="hero mb-12 lg:py-20 lg:h-auto" style={{backgroundImage: `url(${bg})`}}>
                    <div className="hero-content flex-col justify-evenly lg:flex-row-reverse gap-10">
                        <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                        <div>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            ></DayPicker>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AppointmentBanner;