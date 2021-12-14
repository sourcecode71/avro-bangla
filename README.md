# avro-bangla
Enable Bangla front to a textbox or a textarea with Angular using Avro Phonetic.  To enable Bangla in a textbox it is needed to use 

1.  avro-lib.js
2.	avro.jquery.js
3.	qunit.js
4.	avro-lib.test.js 

## Add theses library in Angular.js
![dist](https://github.com/sourcecode71/images/blob/master/avro-library-add.png)

## Add the following line inside 
### $('textarea, input[type=text]').avro({'bangla':true});

![dist](https://github.com/sourcecode71/images/blob/master/avro-enable.png)

If you use jquery, declare it as any. Like following bellow 
declare  var $:any;







