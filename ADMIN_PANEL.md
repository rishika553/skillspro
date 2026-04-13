# Admin Panel Documentation

## 🔐 Access

**URL:** http://localhost:3000/admin

**Credentials:**
- Username: `admin`
- Password: `admin123`

## 📊 Features

### 1. Dashboard Overview
- **Total Requests** - All advisor requests received
- **Pending** - Requests awaiting contact
- **Contacted** - Requests that have been reached out to
- **Converted** - Successful enrollments

### 2. Request Management
- View all advisor requests in a table
- See complete details: Name, Email, Phone, Course, Role, Status, Date
- Update request status with dropdown (Pending → Contacted → Converted → Closed)
- Real-time status updates

### 3. Data Export
- Export all requests as CSV file
- Includes all fields with proper formatting
- Filename includes current date

### 4. Refresh Data
- Manual refresh button to get latest data
- Auto-loads on login

## 🔧 API Endpoints

### Authentication
```
POST /api/admin/login
Body: { username, password }
```

### Get All Requests
```
GET /api/advisor-request
Returns: All advisor requests with details
```

### Update Status
```
POST /api/admin/update-status
Body: { id, status }
Status options: pending, contacted, converted, closed
```

### Export Data
```
GET /api/admin/export
Returns: CSV file download
```

### Get Statistics
```
GET /api/admin/stats
Returns: Analytics data (total, by status, by course, trends)
```

## 🔒 Security

### Current Implementation
- Simple username/password authentication
- Credentials stored in `.env.local`
- Session-based authentication (sessionStorage)
- No database user management

### Production Recommendations
1. **Use proper authentication** (NextAuth.js, Auth0, Clerk)
2. **Hash passwords** (bcrypt)
3. **Add JWT tokens** for API security
4. **Implement rate limiting**
5. **Add HTTPS** in production
6. **Use environment variables** for secrets
7. **Add role-based access control**

## 📝 Usage Guide

### Login
1. Navigate to `/admin`
2. Enter username: `admin`
3. Enter password: `admin123`
4. Click "Login"

### View Requests
- All requests are displayed in a table
- Sorted by most recent first
- Color-coded status badges

### Update Status
1. Click on the status dropdown for any request
2. Select new status:
   - **Pending** (Amber) - New request
   - **Contacted** (Blue) - Advisor reached out
   - **Converted** (Green) - Student enrolled
   - **Closed** (Gray) - Request closed
3. Status updates automatically

### Export Data
1. Click "Export CSV" button
2. File downloads automatically
3. Open in Excel/Google Sheets

### Logout
- Click "Logout" button
- Clears session
- Redirects to login

## 🎨 Customization

### Change Credentials
Edit `.env.local`:
```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
```

### Add More Stats
Edit `src/app/api/admin/stats/route.ts` to add custom analytics.

### Customize Table Columns
Edit `src/app/admin/page.tsx` table section to add/remove columns.

### Add Filters
You can add filtering by:
- Status
- Course
- Date range
- Search by name/email

## 🚀 Future Enhancements

### Planned Features
- [ ] Advanced filtering and search
- [ ] Date range picker
- [ ] Charts and graphs (using Chart.js or Recharts)
- [ ] Email notifications
- [ ] Bulk actions (update multiple statuses)
- [ ] Notes/comments on requests
- [ ] Activity log
- [ ] User management
- [ ] Role-based permissions
- [ ] Dark mode

### Analytics Dashboard
- Conversion rate tracking
- Course popularity trends
- Response time metrics
- Lead source tracking

## 🐛 Troubleshooting

### Can't Login
- Check `.env.local` has correct credentials
- Verify `ADMIN_USERNAME` and `ADMIN_PASSWORD` are set
- Restart dev server after changing .env

### No Data Showing
- Check database connection
- Verify advisor_requests table exists
- Run `/api/setup-db` if needed

### Status Not Updating
- Check browser console for errors
- Verify `/api/admin/update-status` endpoint is working
- Check database permissions

### Export Not Working
- Verify `/api/admin/export` endpoint is accessible
- Check browser download settings
- Try different browser

## 📱 Mobile Responsive

The admin panel is fully responsive:
- Mobile: Stacked layout, scrollable table
- Tablet: Optimized grid layout
- Desktop: Full table view with all columns

## 🔗 Related Files

- **Admin Page:** `src/app/admin/page.tsx`
- **Login API:** `src/app/api/admin/login/route.ts`
- **Update Status API:** `src/app/api/admin/update-status/route.ts`
- **Export API:** `src/app/api/admin/export/route.ts`
- **Stats API:** `src/app/api/admin/stats/route.ts`
- **Requests API:** `src/app/api/advisor-request/route.ts`

## 💡 Tips

1. **Regular Exports** - Export data weekly for backup
2. **Status Updates** - Keep statuses current for accurate analytics
3. **Quick Actions** - Use keyboard shortcuts (coming soon)
4. **Monitor Trends** - Check stats regularly to identify popular courses
5. **Response Time** - Aim to contact pending requests within 24 hours

---

**Need Help?** Check the API endpoints or database schema for more details.
