define([],function(){return window.GlobalEditorLock=new function(){var a=null;this.isEditing=function(){return a!=null},this.hasLock=function(b){return a==b},this.enterEditMode=function(b){if(a!=null)throw"GlobalEditorLock : enterEditMode : currentEditor == null";if(!b.commitCurrentEdit)throw"GlobalEditorLock : enterEditMode : editor must implement .commitCurrentEdit()";if(!b.cancelCurrentEdit)throw"GlobalEditorLock : enterEditMode : editor must implement .cancelCurrentEdit()";a=b},this.leaveEditMode=function(b){if(a!=b)throw"GlobalEditorLock : leaveEditMode() : currentEditor != editor";a=null},this.commitCurrentEdit=function(){return a?a.commitCurrentEdit():!0},this.cancelCurrentEdit=function(){a&&a.cancelCurrentEdit()}},window.GlobalEditorLock})