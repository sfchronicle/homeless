# Beyond Homelessness
The San Francisco Chronicle has joined with more than 70 other news organizations to focus attention on the seemingly intractable problem of homelessness in our region. The SF Homeless Project explores possible solutions that might ease, if not end, the suffering of thousands of people living on our streets, and improve the quality of life for all residents. Project participants, which began publishing in June, will continue the work throughout 2016. To date, the SF Homeless Project has been emulated in more than a dozen U.S. cities where homelessness remains a humanitarian crisis.


## Includes:

- Livereload for fast development
- Grunt tasks for serving application
- Jinja2 for sane templating
- Frozen-Flask for creating static projects

### Requirements
- Python 2.7.x
- Node.js 0.12
  - uglifyjs (`npm install -g uglifyjs`)
  - clean-css (`npm install -g clean-css`)
  - Bower and Grunt (`$ npm install -g grunt-cli bower`)

### Installation
```bash
$ git clone git@github.com:sfchronicle/ingleside.git $PROJECT_NAME
$ cd $PROJECT_NAME
$ mkvirtualenv $PROJECT_NAME
$ pip install -r requirements.txt && npm install && bower install
$ grunt serve
```

### Build and deployment
Now run `build.py` and specify if its for `production` or `staging` to compress assets for upload.
```bash
$ python build.py production
```

## Contributing
1. Fork it.
2. Create a branch (`git checkout -b username-patch-n`)
3. Commit your changes (`git commit -am "Added support for MovableType"`)
4. Push to the branch (`git push origin username-patch-n`)
5. Open a [Pull Request](https://help.github.com/articles/creating-a-pull-request/)
6. Enjoy some [artisanal toast](https://www.eater.com/2014/5/30/6215971/artisanal-toast-is-taking-the-nation-by-storm)

## License
The MIT License (MIT)

Copyright The San Francisco Chronicle from '93 'til ...

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
