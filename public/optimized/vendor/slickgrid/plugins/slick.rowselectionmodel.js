(function(a){function b(b){function j(d){h=a.extend(!0,{},i,b),c=d,f.subscribe(c.onActiveCellChanged,l(t)),f.subscribe(c.onKeyDown,l(u)),f.subscribe(c.onClick,l(v))}function k(){f.unsubscribeAll()}function l(a){return function(){g||(g=!0,a.apply(this,arguments),g=!1)}}function m(a){var b=[];for(var c=0;c<a.length;c++)for(var d=a[c].fromRow;d<=a[c].toRow;d++)b.push(d);return b}function n(a){var b=[],d=c.getColumns().length-1;for(var e=0;e<a.length;e++)b.push(new Slick.Range(a[e],0,a[e],d));return b}function o(a,b){var c,d=[];for(c=a;c<=b;c++)d.push(c);for(c=b;c<a;c++)d.push(c);return d}function p(){return m(d)}function q(a){r(n(a))}function r(a){d=a,e.onSelectedRangesChanged.notify(d)}function s(){return d}function t(a,b){h.selectActiveRow&&r([new Slick.Range(b.row,0,b.row,c.getColumns().length-1)])}function u(a){var b=c.getActiveCell();if(b&&a.shiftKey&&!a.ctrlKey&&!a.altKey&&!a.metaKey&&(a.which==38||a.which==40)){var e=p();e.sort(function(a,b){return a-b}),e.length||(e=[b.row]);var f=e[0],g=e[e.length-1],h;a.which==40?h=b.row<g||f==g?++g:++f:h=b.row<g?--g:--f,h>=0&&h<c.getDataLength()&&(c.scrollRowIntoView(h),d=n(o(f,g)),r(d)),a.preventDefault(),a.stopPropagation()}}function v(b){var e=c.getCellFromEvent(b);if(!e||!c.canCellBeActive(e.row,e.cell))return!1;var f=m(d),g=a.inArray(e.row,f);if(!b.ctrlKey&&!b.shiftKey&&!b.metaKey)return!1;if(c.getOptions().multiSelect)if(g===-1&&(b.ctrlKey||b.metaKey))f.push(e.row),c.setActiveCell(e.row,e.cell);else if(g!==-1&&(b.ctrlKey||b.metaKey))f=a.grep(f,function(a,b){return a!==e.row}),c.setActiveCell(e.row,e.cell);else if(f.length&&b.shiftKey){var h=f.pop(),i=Math.min(e.row,h),j=Math.max(e.row,h);f=[];for(var k=i;k<=j;k++)k!==h&&f.push(k);f.push(h),c.setActiveCell(e.row,e.cell)}return d=n(f),r(d),b.stopImmediatePropagation(),!0}var c,d=[],e=this,f=new Slick.EventHandler,g,h,i={selectActiveRow:!0};a.extend(this,{getSelectedRows:p,setSelectedRows:q,getSelectedRanges:s,setSelectedRanges:r,init:j,destroy:k,onSelectedRangesChanged:new Slick.Event})}a.extend(!0,window,{Slick:{RowSelectionModel:b}})})(jQuery)