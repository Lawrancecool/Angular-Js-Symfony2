/**
 * Binds a TinyMCE widget to <textarea> elements.
 */
angular.module('ui.tinymce', [])
  .value('uiTinymceConfig', {})
  .directive('uiTinymce', ['uiTinymceConfig', function (uiTinymceConfig) {
    uiTinymceConfig = uiTinymceConfig || {};
    var generatedIds = 0;
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ngModel) {
        var expression, options, tinyInstance,
          updateView = function () {
            ngModel.$setViewValue(elm.val());
            // KeyUp Tigger for to checkTickMark
            if (typeof scope.checkTickMark === 'function') {
               scope.checkTickMark();
            }
            if (!scope.$$phase) {
              scope.$apply();
            }
          };
        // generate an ID if not present
        if (!attrs.id) {
          attrs.$set('id', 'uiTinymce' + generatedIds++);
        }

        if (attrs.uiTinymce) {
          expression = scope.$eval(attrs.uiTinymce);
        } else {
          expression = {};
        }
        options = {
          // Update model when calling setContent (such as from the source editor popup)
          setup: function (ed) {
            var args;
            ed.on('init', function(args) {
              ngModel.$render();
            });
            // Update model on button click
            ed.on('ExecCommand', function (e) {
              ed.save();
              updateView();
            });
            // Update model on keypress
            ed.on('KeyUp', function (e) {
              ed.save();
              updateView();
            });
            ed.on('SetAttrib', function (e) {
                  ed.save();
                  updateView();
            });
            // Update model on change, i.e. copy/pasted text, plugins altering content
            ed.on('SetContent', function (e) {
              if(!e.initial){
                ed.save();
                updateView();
              }
            });
            ed.on('PostProcess', function(edi) {
               // we are cleaning empty paragraphs
               edi.content = edi.content.replace(/&nbsp;/gi,' ');
               updateView();
            });
            if (expression.setup) {
              scope.$eval(expression.setup);
              delete expression.setup;
            }
          },
          mode: 'exact',
          elements: attrs.id
        };
        // extend options with initial uiTinymceConfig and options from directive attribute value
        if (attrs.placeholder) {  // Raja: Added to support placeholder text in wysiwyg editors
            options.placeholder = attrs.placeholder;
        }
        if (attrs.ngModel && (attrs.ngModel == 'subject' ||
                              attrs.ngModel == 'workAddressMessagessubject' ||
                              attrs.ngModel == 'debtchasingcommunicationsubject' ||
                              attrs.ngModel == 'EmailSubject' ||
                              attrs.ngModel == 'WemailSubject' ||
                              attrs.ngModel == 'workAddressSubject' ||
                              attrs.ngModel == 'debtchasingsubject' ||
                              attrs.ngModel == 'serviceRemindersEmailsubject' ||
                              attrs.ngModel == 'followUpEmailsubject'

            )) {
            options.nowrap = true;          // NOWRAP on subject: COM-4716
        }
        angular.extend(options, uiTinymceConfig, expression);
        setTimeout(function () {
          tinymce.init(options);
        });


        ngModel.$render = function() {
          if (!tinyInstance) {
            tinyInstance = tinymce.get(attrs.id);
          }
          if (tinyInstance) {
            tinyInstance.setContent(ngModel.$viewValue || '');
          }
        };
      }
    };
  }]);
