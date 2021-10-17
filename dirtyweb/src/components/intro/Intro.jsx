import "./intro.scss"

export default function Intro() {
    return (
        
            <div className="lateral">
                <div className="lateral__caja">
                    <div className="lateral__texto">
                        <span>follow us</span>
                    </div>
                    <ul className="lateral__icons">
                       
                           <li className="icon">
                               <a href="https://www.facebook.com/dirtyinktattoostudio" target="_blank" rel="noreferrer">
                                    <img src="assets/facebook.png" className="icon_img" alt="" />
                               </a>
                            </li>
                            <li className="icon">
                               <a href="https://www.instagram.com/dirtyinktattoostudio" target="_blank" rel="noreferrer">
                                    <img src="assets/instagram.png" className="icon_img" alt="" />
                               </a>
                            </li>
                            <li className="icon">
                               <a href="https://www.tiktok.com/@dirtyinktattoostudio" target="_blank" rel="noreferrer">
                                    <img src="assets/tiktok.png" className="icon_img"  alt="" />
                               </a>
                            </li>
                       
                    </ul>
                </div>
            </div>
                
          
        

    )
}
