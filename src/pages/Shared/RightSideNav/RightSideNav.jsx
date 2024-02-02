import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div className='outline'>
            <div className='p-4'>
                <h2 className="font-semibold text-2xl mb-4">Login With</h2>
                <div className='space-y-3'>
                    <button className="btn w-full btn-outline" >
                        <FaGoogle></FaGoogle>
                        Login With Google
                    </button>
                    <button className="btn w-full btn-outline" >
                        <FaGithub></FaGithub>
                        Login With Github
                    </button>
                </div>
            </div>

            {/* find us  on  */}
            <div className='mt-6 p-4'>
                <h2 className="font-semibold text-2xl mb-4">Find Us On</h2>
                <div className='mt-3'>
                    <a className='flex items-center gap-2 p-4 border border-gray-500 rounded-t-lg' href=""> 
                    <FaFacebook></FaFacebook>
                    <span>facebook</span>
                    </a>
                    <a className='flex items-center gap-2 p-4 border-x  border-gray-500 rounded-t-sm' href=""> 
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                    </a>
                    <a className='flex items-center gap-2 p-4 border  border-gray-500 rounded-b-lg' href=""> 
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                    </a>
                </div>
            </div>
              {/* find us  on  */}
              <div className='mt-6 p-4'>
                <h2 className="font-semibold text-2xl mb-4">Q Zone</h2>
                <div className='mt-3 '>
                   <img src={qZone1} alt="" />
                   <img src={qZone2} alt="" />
                   <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;