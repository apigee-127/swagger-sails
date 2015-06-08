/****************************************************************************
 The MIT License (MIT)

 Copyright (c) 2015 Apigee Corporation

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
 ****************************************************************************/
'use strict';

var should = require('should');
var path = require('path');
var SwaggerRunner = require('..');

var DEFAULT_PROJECT_ROOT = path.resolve(__dirname, 'assets', 'project');

describe('index', function() {

  var hook;

  before(function() {
    var sails = {
      config: {
        appPath: DEFAULT_PROJECT_ROOT,
        paths: {
          controllers: DEFAULT_PROJECT_ROOT
        }
      }
    };
    hook = SwaggerRunner(sails);
  });

  it('should expose correct properties', function() {
    hook.should.have.properties('initialize', 'routes');
  });

  it('should initialize without error', function(done) {
    hook.initialize(function(err) {
      should.not.exist(err);
      done();
    })
  });

  it('should have an appropriate hook path and function', function() {
    should.exist(hook.routes.after);
    should.exist(hook.routes.after['/*']);
    hook.routes.after['/*'].should.be.a.Function;
    hook.routes.after['/*'].length.should.eql(3);
  });

});
