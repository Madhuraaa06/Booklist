import React from 'react'

function Profile() {
  return (
    <div className='profilepage'>
      
        <div className='profile-card '>
                
                <h3 className='username '>
                <div className='profile-img'>
                    <img src='/images/profile.png'></img>
                </div>Madhuraaa</h3>
        </div>
        <div className='profile-contents m-5'>
        <h1>MY BOOKs</h1>
       
<div class="btn-group ">
  <button type="button" class="btn btn-danger">Genre</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Romance</a></li>
    <li><a class="dropdown-item" href="#">Mystery-Thriller</a></li>
    <li><a class="dropdown-item" href="#">Motivational</a></li>
    <li><a class="dropdown-item" href="#">Educational</a></li>
    <li><a class="dropdown-item" href="#">Biography</a></li>
    
  </ul>
</div>
      </div>
    </div>
  )
}

export default Profile
