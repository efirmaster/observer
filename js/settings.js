/*     
    Copyright 2012 OpenBroadcaster, Inc.

    This file is part of OpenBroadcaster Server.

    OpenBroadcaster Server is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    OpenBroadcaster Server is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with OpenBroadcaster Server.  If not, see <http://www.gnu.org/licenses/>.
*/

/* store settings and data which is used by the UI */

OB.Settings = new Object();

OB.Settings.init = function()
{
	OB.Callbacks.add('ready',-70,OB.Settings.getMediaSettings);
}

OB.Settings.categories = new Array();
OB.Settings.countries = new Array();
OB.Settings.languages = new Array();
OB.Settings.genres = new Array();

OB.Settings.permissions = null;
OB.Settings.groups = null;

OB.Settings.getMediaSettings = function()
{
  var post = [];
  post.push(['settings','country_list', {}]);
  post.push(['settings','language_list', {}]);
  post.push(['settings','genre_list', {}]);
  post.push(['settings','category_list', {}]);
  post.push(['settings','get_ob_version', {}]);

  OB.API.multiPost(post,function(response)
  {
    OB.Settings.countries = response[0].data;
    OB.Settings.languages = response[1].data;
    OB.Settings.genres = response[2].data;
    OB.Settings.categories = response[3].data;
    OB.version = response[4].data;
  },'sync');
}




