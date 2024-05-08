import { motion } from "framer-motion"

function RegisterPage() {
    let days = []
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const years = []
    const currentYear = new Date().getFullYear()

    const variants = {
        hidden: {
            opacity: 0,
            y: -200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: .75}
        },
        exit: {
            opacity: 0,
        }
    }

    for (let i = 1; i <= 31; i++) {
        days.push(i)
    }

    for (let i = currentYear; i >= currentYear - 100; i--) {
        years.push(i)
    }

    return (
        <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="d-flex justify-content-center align-items-center h-screen"
        >
            <div className="bg-[#2b2d31] w-[30%] text-white px-3 py-4">
                <div className="text-center fs-4 fw-bold">Create an account</div>
                <form className="mx-3" style={{color: "#b3b8bf", fontSize: "12px"}}>
                    <div className="flex flex-col">
                        <label className="my-2 fw-bold">EMAIL <span className="text-danger">*</span></label>
                        <input type="email" className="border-0 mb-1 bg-[#1e1f22] text-[#b3b8bf] rounded-[5px] focus:ring-0" />
                    </div>

                    <div className="flex flex-col">
                        <label className="my-2 fw-bold">DISPLAY NAME</label>    
                        <input type="text" className="border-0 mb-1 bg-[#1e1f22] text-[#b3b8bf] rounded-[5px] focus:ring-0" />
                    </div>

                    <div className="flex flex-col">
                        <label className="my-2 fw-bold">USERNAME <span className="text-danger">*</span></label>
                        <input type="text" className="border-0 mb-1 bg-[#1e1f22] text-[#b3b8bf] rounded-[5px] focus:ring-0" />
                    </div>

                    <div className="flex flex-col">
                        <label className="my-2 fw-bold">PASSWORD <span className="text-danger">*</span></label>
                        <input type="password" className="border-0 mb-1 bg-[#1e1f22] text-[#b3b8bf] rounded-[5px] focus:ring-0" />
                    </div>
                
                    <label className="my-2 fw-bold">DATE OF BIRTH <span className="text-danger">*</span></label>
                    <div id="date" className="d-flex gap-3 mb-3 fs-6">
                        <select id="day" className="flex-1 border-0 bg-[#1e1f22] text-[#b3b8bf] rounded-[5px]">
                            <option disabled selected hidden>Day</option>
                            {days.map((day, id) => (
                                <option value={day} key={id}>{day}</option>
                            ))}
                        </select>

                        <select id="month" className="flex-1 border-0 bg-[#1e1f22] text-[#b3b8bf] rounded-[5px]">
                            <option disabled selected hidden>Month</option>
                            {months.map((month, id) => (
                                <option value={month} key={id}>{month}</option>
                            ))}
                        </select>
                        
                        <select id="year" className="flex-1 border-0 bg-[#1e1f22] text-[#b3b8bf] rounded-[5px]">
                            <option disabled selected hidden>Year</option>
                            {years.map((year, id) => (
                                <option value={year} key={id}>{year}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="flex gap-2">
                        <input id="checkForEmail" type="checkbox" className="d-flex self-center gap-2 bg-[#2b2d31] w-[24px] h-[24px] rounded-[5px] focus:ring-0 checked:bg-[#5865f2]" />
                        <label htmlFor="checkForEmail">(Opitional) It&apos;s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.</label>
                    </div>

                    <button href="#" className="d-block mt-3 mb-2 w-100 bg-[#5865f2] text-white rounded-[5px] h-[40px] fs-6 hover:bg-[#4752c4] duration-200">Continue</button>
                    <label className="mb-3" style={{fontSize: "10px"}}>By registering, you agree to Discord&apos;s Terms of Service and Privacy Policy</label>
                    
                    <a className="d-block fs-6" href="/login">Already have an account?</a>
                </form>
            </div>
        </motion.div>
    )
}

export default RegisterPage
