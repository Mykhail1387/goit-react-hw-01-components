import React from 'react';
import PropTypes from 'prop-types';

import styles from './friendList.module.css'

const FriendList = ({ friends }) => (
    <>task-03---------------------------------------------------------------------------------------------------------
        <div className={styles.facebook}>
            <ul className="friend-list">
                {friends.map(friend => {
                    const spanClass = friend.isOnline ? styles.isOnline : styles.isOffline;
                    return (
                        <li key={friend.id} className={styles.item}>
                            <span className={spanClass}></span>
                            <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="85" />
                            <p className={styles.name}>{friend.name}</p>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    </>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
    })),
}

export default FriendList;