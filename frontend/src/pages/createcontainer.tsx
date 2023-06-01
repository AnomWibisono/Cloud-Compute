import Navbar from '../../components/Navbar';

export default function createcontainer(){
    return(
        <div>
            <Navbar />
            <div className='max-w-screen mx-auto pt-28 '>
                <img src="./arrowback.svg" />
            </div>
        </div>
    )
}