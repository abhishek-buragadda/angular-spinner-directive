# angular-spinner-directive
 ## Usage  
 Below is the code to show how to use the directive. 
 ```HTML
   <div angular-spinner  template-url="src/template.html" load-func="testFunc()">
                <div class="content1">
                  this is sample content 2
                </div>
                <div class="content2">
                  this is smaple content one
                </div>

            </div>
  ```
  Include the attribute "*angular-spinner*" in the div on which you want to show the spinner on.  
  By default it will show the default spinner and it gets shown when any $http request is being made.  
  
  User can specify the custom function for based on which the spinner will be shown and hidden.   
  This can be done by adding an attribute 
  
     load-func="functionName".  
  
User can also give the custom gif image to show when at the centre of the div by adding attribute
  
     template-url="templateLocation"
