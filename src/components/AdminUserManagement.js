import React, { useEffect, useState } from 'react';
import userService from '../services/userService';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editingUser, setEditingUser] = useState({ name: '', username: '', role: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await userService.getUsers();
        setUsers(data);
    };

    const handleDeleteUser = async (userId) => {
        await userService.deleteUser(userId);
        fetchUsers();
    };

    const handleEditUser = async () => {
        await userService.updateUser(editingUserId, editingUser);
        setEditingUserId(null);
        fetchUsers();
    };

    const handleEditClick = (user) => {
        setEditingUserId(user.id);
        setEditingUser({ name: user.name, username: user.username, role: user.role });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>

            <div>
                <h2 className="font-semibold">Users List</h2>
                {users.map((user) => (
                    <div key={user.id} className="flex justify-between p-2">
                        {editingUserId === user.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editingUser.name}
                                    onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                                    className="border p-2 m-2"
                                    placeholder="Name"
                                />
                                <input
                                    type="text"
                                    value={editingUser.username}
                                    onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                                    className="border p-2 m-2"
                                    placeholder="Username"
                                />
                                <select
                                    value={editingUser.role}
                                    onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                                    className="border p-2 m-2"
                                >
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                                <button onClick={handleEditUser} className="bg-green-500 text-white p-2 m-2">
                                    Save
                                </button>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <p>{user.username} ({user.name}) &gt; {user.role}</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        className="bg-yellow-500 text-white p-2 m-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        className="bg-red-500 text-white p-2 m-2"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserManagement;
