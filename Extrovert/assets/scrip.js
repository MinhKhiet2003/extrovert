

  //  thống báo bắt buộc phải đăng nhập trang index-login 

  var tendangnhap = document.getElementsByClassName('tendangnhap');
  var tendangnhaplogin = document.getElementById('tendangnhaplogin');
  window.addEventListener('click', function(a){
    if (document.getElementById('dangnhapp').contains(a.target)){
          window.location = "login/index.html";
    } else{
      alert('Vui lòng đăng nhập');
    }
  })

  // thanh menu ở góc trái dưới cùng phần trang chủ


  window.addEventListener('click', function(b){
    var hienthi = document.getElementById('btn-child')
    if (document.getElementById('menuuu').contains(b.target)){
          hienthi.style.display = 'block';
    } else{
          hienthi.style.display = 'none';
    }
  })

  // đăng xuất trong menu


  function menuseting(){
      window.location = "login/index.html";
  }



  // btn like 


  function handleLiked0(t) {
    t.classList.toggle('like-btn--liked')
  }

  function handleLiked(e) {
      e.classList.toggle('like-btn--liked')
    }
    function handleLiked2(f) {
      f.classList.toggle('like-btn--liked')
  }
  function handleLiked3(g) {
      g.classList.toggle('like-btn--liked')
  }

  function hanlecomt1()
  {
    var cmt1 = document.getElementById('cmt1')
    cmt1.onclick
    }
  
        // đăng bài post

  var dangbai = document.getElementById('dangbai')
  var contenchill = document.getElementsByClassName('contenchill')
  var content = document.getElementsByClassName('content')
  var exitpost = document.getElementById('exitpost')
  var contenchill = document.getElementsByClassName('contenchill')
  
  window.addEventListener('click', function(c){
    if (document.getElementById('dangbai').contains(c.target)){
      contenchill[0].style.display = 'flex';
      content[0].style.position = 'fixed';
     
    } 
  });

      // xét quyền riêng tư
var riengtu = document.getElementById('riengtu')
var select = document.querySelector('select')
var riengtupost = document.querySelector('.riengtupost')
riengtu.onclick = function (){
  if(select.value == 'moinguoi'){
    riengtupost.innerHTML = '<i class="fa-solid fa-earth-americas riengtupost"></i>'
  }
  if(select.value == 'quyenriengtu'){
    riengtupost.innerHTML = '<i class="fa-solid fa-earth-americas riengtupost"></i>'
  }
  if(select.value == 'banbe'){
    riengtupost.innerHTML = '<i class="fa-solid fa-user-group "></i>'
  }
  }


    // phần out post


  exitpost.onclick = function(){
    contenchill[0].style.display = 'none';
    content[0].style.position = 'relative';
  }
 
  // var img_post = document.getElementsByClassName('img_post')
  var new_img = document.getElementsByClassName('new_img')
  var ipt = document.getElementById('ipt')
  var new_post = document.getElementsByClassName('new_post');
  var text_post = document.getElementsByClassName('text_post');

      
    sent_post.onclick = function (){
      contenchill[0].style.display = 'none';
      content[0].style.position = 'relative';
      new_post[0].style.display = 'inline-block';
      text_newpost.innerText = text_post[0].value;
      new_img.src = ipt.value;
  };


  // phần tạo cmt

  var sent_cmt = document.getElementById('sent_cmt')
 function addNewCmt(){
  const newCmtValue = document.getElementById('new_textinp').value
  const newCmtElement = document.createElement('div')
  newCmtElement.classList.add('cmt')
  newCmtElement.innerHTML = `<img src="img/imgavt.jpg" alt="">
  <div class="idea">
      <label>Minh Khiết</label>
      <p class="new_textcmt">${newCmtValue}</p>
  </div>`
  const cmtActions = document.createElement('div')
  cmtActions.classList.add('idea-like')
  cmtActions.innerHTML = `<a>thích</a>
                          <a>trả lời</a>
                          <p> Vừa xong</p>`
  document.getElementById('new-post-cmt-wrapper').appendChild(newCmtElement)
  document.getElementById('new-post-cmt-wrapper').appendChild(cmtActions)
  document.getElementById('new_textinp').value = ''
}


function inputEnterAction(){
  if(event.key === 'Enter')
    addNewCmt()
}

// tên user

var username = document.getElementsByClassName('username')
var username1 = document.getElementsByClassName('username1')
var username2 = document.getElementsByClassName('username2')
  username[0].innerText = localStorage.getItem('user');
  username1[0].innerText = localStorage.getItem('user');
  username2[0].innerText = localStorage.getItem('user');


