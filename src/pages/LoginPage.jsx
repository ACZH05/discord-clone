import { motion } from "framer-motion"

export default function AuthPage() {
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

  return (
    <motion.div
    variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="d-flex justify-content-center align-items-center h-screen">
        <div className="w-[30%] bg-[#2b2d31] text-white p-3">
          <div className="text-center fs-4 fw-bold">Welcome Back!</div>
          <div className="text-center text-secondary mb-3">We&apos;re so excited to see you again!</div>

          <form className="mx-3" style={{color: "#b3b8bf", fontSize: "12px"}}>
              <div className="flex flex-col">
                <label className="mb-2 fw-bold">EMAIL OR PHONE NUMBER <span className="text-danger">*</span></label>
                <input type="email" className="border-0 mb-3 bg-[#1e1f22] text-[#b3b8bf] rounded-[5px] focus:ring-0" name="email" />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 fw-bold">PASSWORD <span className="text-danger">*</span></label>
                <input type="password" className="border-0 mb-1 bg-[#1e1f22] text-[#b3b8bf] rounded-[5px] focus:ring-0" name="password" />
              </div>

              <a href="#">Forgot your password?</a>

              <button href="#" className="d-block mt-3 w-100 bg-[#5865f2] text-[#b3b8bf] rounded-[5px] h-[40px] fs-5 hover:bg-[#4752c4] duration-200">Log In</button>

              <div className="mt-2">Need an account? <a href="/register">Register</a></div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
