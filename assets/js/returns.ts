/* eslint-disable no-useless-computed-key */
const Returns: any = {
  about: {
    body: [
      'Hi, welcome to my terminal/personal website.',
      '...',
      'My name is Gabriel Gripp, and I love to develop people',
      'I\'m a career developer, but...',
      'In recent years, I have noticed an interesting space',
      'between the product/commercial/marketing teams, and',
      'the technical teams, and I decided to use my knowledge,',
      'and my ability to communicate, to fill this space'
    ]
  },
  links: {
    body: [
      '<a class="f-foreground under" href="https://www.linkedin.com/in/grippado/" target="_blank">Linkedin</a>',
      '<a class="f-foreground under" href="https://github.com/grippado" target="_blank">Github</a>',
      '<a class="f-foreground under" href="https://www.facebook.com/grippado" target="_blank">Facebook</a>',
      '<a class="f-foreground under" href="https://www.twitter.com/grippado" target="_blank">Twitter</a>'
    ]
  },
  help: {
    body: [
      'This is my terminal/personal website helper',
      'to use it, type in one of the following commands:',
      '...',
      'about - on this page you can see my personal information',
      'carrer - on this page is about my experience and my current job',
      'links - on this page you find links to my social media and my github',
      'clear - clear the terminal',
      'history - show the history of commands you have typed',
      'ls - list the files in the current directory',
      'tree - show the directory structure of the current directory',
      'pwd - show the current directory',
      'exit - exit the terminal',
      '...',
      'Let\'s start!'
    ]
  },
  carrer: {
    body: [
      '----------------------',
      '<p class="f-cyan">Pravaler</p>',
      '<p class="f-orange">Tech Lead</p>',
      '<p class="">September 2021 - Now</p>',
      '----------------------',
      '<p class="f-cyan">SAE Digital</p>',
      '<p class="f-orange">Tech Lead</p>',
      '<p class="">June 2020 - September 2021</p>',
      '----------------------',
      '<p class="f-cyan">Kovi</p>',
      '<p class="f-orange">Specialist Developer</p>',
      '<p class="">November 2019 - June 2020</p>',
      '----------------------',
      '<p class="f-cyan">eÓtica</p>',
      '<p class="f-orange">Lead Developer</p>',
      '<p class="">October 2018 - November 2019</p>',
      '----------------------',
      '<p class="f-cyan">FCamara</p>',
      '<p class="f-orange">Senior Developer Consultant </p>',
      '<p class="">May 2016 - October 2018</p>',
      '----------------------',
      '<p class="f-cyan">Saraiva</p>',
      '<p class="f-orange">Frontend Team Lead</p>',
      '<p class="">January 2017 - January 2018</p>',
      '---',
      '<p class="f-orange">Senior Frontend Developer</p>',
      '<p class="">May 2016 - January 2017</p>',
      '----------------------',
      '<p class="f-cyan">eÓtica</p>',
      '<p class="f-orange">Senior Frontend Developer</p>',
      '<p class="">December 2014 - May 2016</p>',
      '----------------------'
    ]
  },
  tree: {
    body: [
      '<span class="f-orange">|–---</span> about',
      '<span class="f-orange">|–---</span> carrer',
      '<span class="f-orange">|–---</span> links',
      '<span class="f-orange">|–---</span> help'
    ]
  },
  ['pwd']: {
    body: [
      'https://gripp.link/'
    ]
  },
  ['ls']: {
    body: [
      '<span class="f-cyan">drwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;about</span>',
      '<span class="f-cyan">drwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;carrer</span>',
      '<span class="f-cyan">drwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;links</span>',
      '<span class="f-cyan">drwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;help</span>'
    ]
  },
  ['ls -lha']: {
    body: [
      '<span class="f-cyan">-rwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;<span class="f-foreground">clear</span></span>',
      '<span class="f-cyan">-rwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;<span class="f-foreground">history</span></span>',
      '<span class="f-cyan">-rwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;<span class="f-foreground">ls</span></span>',
      '<span class="f-cyan">-rwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;<span class="f-foreground">tree</span></span>',
      '<span class="f-cyan">-rwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;<span class="f-foreground">pwd</span></span>',
      '<span class="f-cyan">drwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;<span class="f-yellow">about</span></span>',
      '<span class="f-cyan">drwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;<span class="f-yellow">carrer</span></span>',
      '<span class="f-cyan">drwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;<span class="f-yellow">links</span></span>',
      '<span class="f-cyan">drwxr-xr-x&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;grippado&nbsp;&nbsp;&nbsp;&nbsp;staff&nbsp;&nbsp;&nbsp;&nbsp;113B Mar 5 00:06&nbsp;&nbsp;&nbsp;<span class="f-yellow">help</span></span>'
    ]
  }
}

export default Returns
