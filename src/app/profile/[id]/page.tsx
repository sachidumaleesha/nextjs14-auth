export default function UserProfile({params}: any){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>Profile</h1>
            <hr /> 
            <p className="text-4xl ">Profile Page</p>
            <span className="p-2 ml-1 rounded-lg bg-orange-500">{params.id}</span>
        </div>
    )
}