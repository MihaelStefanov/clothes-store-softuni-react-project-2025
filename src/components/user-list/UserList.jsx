// src/components/user-list/UserList.jsx
import { useState, useEffect } from 'react';
import { getAllUsers, addUser, updateUser, deleteUser } from '../../services/userService';
import './user-list.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Зареди потребителите при монтиране на компонента
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Грешка при зареждане на потребители');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Добави нов потребител
  const handleAddUser = async () => {
    try {
      const newUser = {
        name: 'Нов потребител',
        email: `user${Date.now()}@example.com`,
        password: 'password123'
      };
      await addUser(newUser);
      loadUsers(); // Презареди списъка
    } catch (err) {
      console.error('Грешка при добавяне:', err);
    }
  };

  // Обнови потребител
  const handleUpdateUser = async (userId, currentName) => {
    try {
      await updateUser(userId, {
        name: currentName + ' (Обновен)'
      });
      loadUsers(); // Презареди списъка
    } catch (err) {
      console.error('Грешка при обновяване:', err);
    }
  };

  // Изтрий потребител
  const handleDeleteUser = async (userId) => {
    if (window.confirm('Сигурни ли сте, че искате да изтриете този потребител?')) {
      try {
        await deleteUser(userId);
        loadUsers(); // Презареди списъка
      } catch (err) {
        console.error('Грешка при изтриване:', err);
      }
    }
  };

  if (loading) {
    return <div className="loading-message">Зареждане...</div>;
  }

  if (error) {
    return <div className="error-message">Грешка: {error}</div>;
  }

  return (
    <div className="user-list-container">
      <div className="user-list-header">
        <h2 className="user-list-title">Потребители</h2>
        <button className="btn-add-user" onClick={handleAddUser}>
          + Добави потребител
        </button>
      </div>
      
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <p><strong>Име:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              {user.createdAt && (
                <p><strong>Създаден:</strong> {new Date(user.createdAt).toLocaleDateString('bg-BG')}</p>
              )}
            </div>
            
            <div className="user-actions">
              <button 
                className="btn-update"
                onClick={() => handleUpdateUser(user.id, user.name)}
              >
                Обнови
              </button>
              <button 
                className="btn-delete"
                onClick={() => handleDeleteUser(user.id)}
              >
                Изтрий
              </button>
            </div>
          </div>
        ))}
      </div>

      {users.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#666', marginTop: '40px' }}>
          Няма намерени потребители. Добавете нов потребител!
        </p>
      )}
    </div>
  );
}

export default UserList;