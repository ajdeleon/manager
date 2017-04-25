module.exports = {"name":"StackScripts","basePath":"/linode/stackscripts","description":"StackScript endpoints provide a means of managing the <a href=\"#object-stackscript\"> StackScript objects</a> accessible from your account.\n","endpoints":[{"description":"View public StackScripts.\n","endpoints":null,"methods":[{"description":"Returns a list of public <a href=\"#object-stackscript\">StackScripts</a>. Results can be <a href=\"#filtering\">filtered</a>.  Include '\"mine\": true' in the filter dict to see only StackScripts you created.\n","examples":[{"name":"curl","value":"curl https://$api_root/$version/linode/stackscripts\n"},{"name":"python","value":"import stackscript\nTODO\n"}],"name":"GET"},{"oauth":"stackscripts:create","description":"Create a new StackScript.\n","params":{"label":{"description":"Label of StackScript.\n","limit":"3-128 characters"},"description":{"optional":true,"description":"Description of the StackScript.\n"},"distributions":{"description":"A list of <a href=\"#object-distribution\">distributions</a> compatible with StackScript.\n","type":"distribution"},"is_public":{"optional":true,"description":"If true, this StackScript will be publicly visible in the Linode StackScript library. Defaults to False.\n"},"rev_note":{"optional":true,"description":"Release notes for this revision.\n","limit":"0-512 characters"},"script":{"description":"The shell script to run on boot.\n"}},"examples":[{"name":"curl","value":"curl -H \"Content-Type: application/json\" \\\n  -H \"Authorization: token $TOKEN\" \\\n  -X POST -d '{\n    \"label\": \"Initial Label\",\n    \"distributions\": [\"linode/ubuntu15.4\", \"linode/ubuntu15.10\"],\n    \"script\": \"#!...\"\n  }' \\\n  https://$api_root/$version/linode/stackscripts\n"},{"name":"python","value":"import stackscript\nTODO\n"}],"name":"POST"}],"path":"linode/stackscripts"},{"description":"Manage a particular StackScript.\n","endpoints":null,"methods":[{"oauth":"stackscripts:view","description":"Returns information about this <a href=\"#object-stackscript\"> StackScript</a>.\n","examples":[{"name":"curl","value":"curl -H \"Content-Type: application/json\" \\\n  -H \"Authorization: token $TOKEN\" \\\n  -X GET \\\n  https://$api_root/$version/linode/stackscripts/$stackscript_id\n"},{"name":"python","value":"import stackscript\nTODO\n"}],"name":"GET"},{"oauth":"stackscripts:modify","description":"Edits this StackScript.\n","examples":[{"name":"curl","value":"curl -H \"Content-Type: application/json\" \\\n  -H \"Authorization: token $TOKEN\" \\\n  -X PUT -d '{\n    \"label\": \"New Label\"\n  }' \\\n  https://$api_root/$version/linode/stackscripts/$stackscript_id\n"},{"name":"python","value":"import stackscript\nTODO\n"}],"name":"PUT"},{"oauth":"stackscripts:delete","description":"Deletes this StackScript.  This action cannot be undone.\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n  -X DELETE \\\n  https://$api_root/$version/linode/stackscripts/$stackscript_id\n"},{"name":"python","value":"import stackscript\nTODO\n"}],"name":"DELETE"}],"path":"linode/stackscripts/:id"}],"methods":null};