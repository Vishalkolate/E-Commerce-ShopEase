

import React, { useState } from "react";

function EditProfileModal({ show, setShow, user, setUser }) {
    const [formData, setFormData] = useState(user);

    if (!show) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value,
        });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setFormData({ ...formData,
                image: URL.createObjectURL(file),
            });
        }
    };

    const handleSave = () => {
        setUser(formData);

        alert("Profile Updated Successfully");

        setShow(false);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-2xl w-[95%] max-w-xl p-8">

                <h2 className="text-3xl font-bold mb-6">Edit Profile </h2>

                <div className="flex justify-center mb-5">

                    <img src={formData.image}  className="w-28 h-28 rounded-full border-4 border-blue-500"/>

                </div>

                <input type="file" onChange={handleImage} className="mb-5 w-full"/>

                <div className="space-y-4">

                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name"
                        className="w-full border rounded-lg p-3"/>

                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"
                        className="w-full border rounded-lg p-3"/>

                    <input type="number" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="Phone Number" className="w-full border rounded-lg p-3"/>

                    <textarea name="address" value={formData.address} onChange={handleChange}
                        rows="3" placeholder="Address" className="w-full border rounded-lg p-3"></textarea>

                </div>

                <div className="flex justify-end gap-4 mt-8">

                    <button onClick={() => setShow(false)} className="px-6 py-3 rounded-lg bg-gray-500 text-white hover:bg-gray-600" > Cancel </button>

                    <button onClick={handleSave} className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700" >Save Changes </button>

                </div>

            </div>

        </div>
    );
}

export default EditProfileModal;
