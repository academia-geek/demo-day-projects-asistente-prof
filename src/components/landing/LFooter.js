import React from 'react'

const LFooter = () => {
  return (
    
        <footer className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-10 py-16 xl:px-36 2xl:px-36 bg-neutral-darkViolet">
            <h1>Tu Asistente Prof</h1>
            <img src="https://res.cloudinary.com/lau2401/image/upload/v1651011780/Ellipse_1_jfbqbz.png" alt=""/>
            <div >
                <div>
                    <h3>Features</h3>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div >
                    <h3>Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="text-center xl:text-left">
                    <h3 className="text-lg font-semibold text-white">Company</h3>
                    <ul className="flex flex-col gap-2 text-neutral-grayishViolet mt-3">
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="flex gap-3">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter"></i>
                    
                </div>
            </div>
        </footer>
  
  )
}

export default LFooter